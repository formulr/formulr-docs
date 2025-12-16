/**
 * Script Playwright pour capturer automatiquement les screenshots de Formulr
 * Usage: node scripts/capture-screenshots.js
 */

import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir } from 'fs/promises';
import dotenv from 'dotenv';

// Charger les variables d'environnement depuis .env
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const CONFIG = {
  baseUrl: process.env.FORMULR_URL || 'https://dashboard.formulr.io',
  email: process.env.FORMULR_EMAIL,
  password: process.env.FORMULR_PASSWORD,
  outputDir: join(__dirname, '../public/images/screenshots'),
  viewport: { width: 1920, height: 1080 },
  locale: 'fr-FR',
};

// Liste des screenshots à capturer (test avec 3 captures)
const SCREENSHOTS = [
  {
    name: 'workflow-editor-interface',
    description: 'Éditeur de workflow visuel',
    priority: 'high',
    actions: async (page, context) => {
      console.log('  → Navigation vers les campagnes...');
      await page.getByRole('button', { name: 'Campagnes' }).click();
      await page.waitForTimeout(1000);

      console.log('  → Ouverture de la campagne "test paiement"...');
      await page.getByRole('link', { name: 'test paiement' }).click();
      await page.waitForTimeout(1000);

      console.log('  → Ouverture de l\'éditeur de workflow...');

      // Écouter l'ouverture d'un nouvel onglet/popup
      const popupPromise = context.waitForEvent('page');
      await page.getByRole('button', { name: 'Modifier workflow' }).click();

      // Attendre que le popup/onglet s'ouvre
      const workflowPage = await popupPromise;
      await workflowPage.waitForLoadState('domcontentloaded');
      await workflowPage.waitForTimeout(2000);

      // Retourner la page du workflow pour la capture
      return workflowPage;
    },
  },
  {
    name: 'conditional-logic-config',
    description: 'Configuration logique conditionnelle',
    priority: 'high',
    actions: async (page) => {
      console.log('  → TODO: Navigation vers la configuration conditionnelle...');
      // TODO: À compléter avec le code enregistré pour cette capture
      // Exemple: ouvrir une campagne, cliquer sur les paramètres d'une section,
      // activer l'affichage conditionnel, etc.
      await page.waitForTimeout(1000);
    },
  },
  {
    name: 'campaign-creation',
    description: 'Création de campagne avec section et module',
    priority: 'medium',
    actions: async (page) => {
      console.log('  → Fermeture de l\'éditeur de workflow...');
      await page.getByRole('button', { name: 'Close' }).click();

      console.log('  → Création d\'une nouvelle campagne...');
      await page.getByRole('button', { name: 'Créer' }).click();
      await page.getByRole('button', { name: 'Campagne vierge' }).click();

      console.log('  → Remplissage du formulaire...');
      await page.getByRole('textbox', { name: 'Nom*' }).fill('Ma campagne de test');
      await page.getByRole('button', { name: 'Soumettre' }).click();

      console.log('  → Ajout d\'une section et d\'un module...');
      await page.locator('#add-section-btn').click();
      await page.getByRole('button', { name: 'Ajouter un module' }).click();
      await page.getByText('Texte court').click();

      console.log('  → Configuration du module...');
      await page.getByRole('paragraph').nth(2).click();
      await page.getByRole('textbox').nth(2).fill('Quel temps fait-il ?');
      await page.getByRole('paragraph').nth(3).click();
      await page.getByRole('textbox').nth(3).fill('Regardez par la fenêtre pour connaître le temps qu\'il fait');

      // Attendre que tout soit stable
      await page.waitForTimeout(1000);
    },
  },
];

/**
 * Connexion à Formulr
 */
async function login(page) {
  console.log('Connexion à Formulr...');

  if (!CONFIG.email || !CONFIG.password) {
    throw new Error(
      'Les credentials sont manquants. Veuillez définir FORMULR_EMAIL et FORMULR_PASSWORD dans vos variables d\'environnement.'
    );
  }

  await page.goto(`${CONFIG.baseUrl}/login`);

  // Remplir les champs de connexion (basé sur les sélecteurs réels de Formulr)
  await page.fill('input[name="login"]', CONFIG.email);
  await page.fill('input[type="password"]', CONFIG.password);
  await page.click('button[type="submit"]');

  // Attendre la redirection après login
  await page.waitForURL(`${CONFIG.baseUrl}/**`, { timeout: 10000 });
  console.log('✓ Connexion réussie');
}

/**
 * Capture un screenshot
 */
async function captureScreenshot(page, context, screenshot) {
  console.log(`\nCapture: ${screenshot.description}`);

  try {
    // Exécuter les actions spécifiques (peut retourner une page différente)
    const targetPage = await screenshot.actions(page, context) || page;

    // Attendre que tout soit chargé (avec timeout réduit pour éviter les blocages)
    try {
      await targetPage.waitForLoadState('networkidle', { timeout: 5000 });
    } catch (e) {
      // Si networkidle timeout, continuer quand même
      console.log('  ⚠ Network idle timeout, continuing anyway...');
    }

    // Capturer le screenshot
    const outputPath = join(CONFIG.outputDir, `${screenshot.name}.png`);
    await targetPage.screenshot({
      path: outputPath,
      fullPage: false, // Capturer seulement la viewport
    });

    console.log(`✓ Screenshot sauvegardé: ${screenshot.name}.png`);
  } catch (error) {
    console.error(`✗ Erreur lors de la capture de ${screenshot.name}:`, error.message);
  }
}

/**
 * Script principal
 */
async function main() {
  console.log('🎬 Démarrage de la capture des screenshots Formulr\n');
  console.log(`URL: ${CONFIG.baseUrl}`);
  console.log(`Langue: ${CONFIG.locale}`);
  console.log(`Sortie: ${CONFIG.outputDir}\n`);

  // Créer le dossier de sortie
  await mkdir(CONFIG.outputDir, { recursive: true });

  // Lancer le navigateur
  const browser = await chromium.launch({
    headless: false, // Mode visible pour le debug
  });

  const context = await browser.newContext({
    viewport: CONFIG.viewport,
    locale: CONFIG.locale,
  });

  const page = await context.newPage();

  try {
    // Connexion
    await login(page);

    // Pause pour permettre la vérification manuelle
    console.log('\n⏸️  Pause: Vérifiez que vous êtes bien connecté');
    console.log('Appuyez sur Entrée pour continuer...');
    await new Promise((resolve) => {
      process.stdin.once('data', resolve);
    });

    // Capturer les screenshots
    for (const screenshot of SCREENSHOTS) {
      await captureScreenshot(page, context, screenshot);
    }

    console.log('\n✅ Toutes les captures ont été effectuées !');
    console.log(`📁 Fichiers sauvegardés dans: ${CONFIG.outputDir}`);
  } catch (error) {
    console.error('\n❌ Erreur:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Exécution
main();
