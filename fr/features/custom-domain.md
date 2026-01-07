---
title: Domaine personnalisé
description: Configurez un domaine personnalisé pour vos formulaires Formulr (Enterprise).
lang: fr-FR
---

# Domaine personnalisé

::: info Enterprise
Cette fonctionnalité est disponible uniquement pour les comptes **Enterprise**.
:::

Personnalisez l'URL de vos formulaires avec votre propre domaine. Au lieu de `https://formulr.app/...`, vos utilisateurs verront votre domaine personnalisé comme `https://forms.votreentreprise.com/...`.

## Prérequis

- Un compte Formulr **Enterprise**
- Un nom de domaine dont vous êtes propriétaire
- Accès à la gestion DNS de votre domaine

## Configuration dans Formulr

1. Connectez-vous à votre espace **Admin**
2. Allez dans [**Paramètres** → **Thème**](https://dashboard.formulr.io/settings/theme)
3. Dans la section **Domaine personnalisé**, saisissez votre domaine (ex: `forms.votreentreprise.com`)
4. Cliquez sur **Enregistrer**

Formulr génère alors deux enregistrements DNS que vous devez configurer chez votre hébergeur.

## Configuration DNS

Vous devez créer **deux enregistrements DNS** chez votre hébergeur de domaine :

### 1. Enregistrement CNAME

Cet enregistrement pointe votre domaine vers les serveurs Formulr.

| Type | Nom | Valeur | TTL |
|------|-----|--------|-----|
| CNAME | `forms` | `dns.formulr.app.` | 10800 |

::: tip Note
- Le **Nom** correspond au sous-domaine choisi (ici `forms` pour `forms.votreentreprise.com`)
- Pour un domaine racine (sans sous-domaine), utilisez `@` comme nom
- N'oubliez pas le **point final** après `dns.formulr.app.`
:::

::: warning Domaine racine (apex)
Utiliser un CNAME sur un domaine racine (apex) n'est pas recommandé par les standards DNS et peut causer des problèmes avec d'autres enregistrements (MX pour les emails, etc.). Certains hébergeurs comme Cloudflare supportent le "CNAME flattening" pour contourner ce problème, mais la plupart des registrars comme Gandi ne le supportent pas. Si vous avez des emails sur ce domaine, envisagez d'utiliser un sous-domaine comme `app.votreentreprise.com` à la place.
:::

### 2. Enregistrement TXT de vérification

Cet enregistrement permet à Formulr de vérifier que vous êtes bien propriétaire du domaine.

| Type | Nom | Valeur | TTL |
|------|-----|--------|-----|
| TXT | `_formulr-verify.forms` | `formulr-verify=xxxxxxxxxxxxxxxx` | 300 |

::: warning Important
- Le **Nom** doit être `_formulr-verify.` suivi de votre sous-domaine (ou juste `_formulr-verify` pour un domaine racine)
- La **Valeur** est fournie dans votre interface Formulr (unique pour chaque domaine)
- Conservez les guillemets autour de la valeur si votre hébergeur le demande
:::

## Exemples par hébergeur

### Gandi

Pour un sous-domaine `forms.votreentreprise.com` :

**Enregistrement CNAME :**
```
forms    CNAME    10800    dns.formulr.app.
```

**Enregistrement TXT :**
```
_formulr-verify.forms    TXT    300    "formulr-verify=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

Pour un domaine racine `forms-votreentreprise.com` (sans sous-domaine) :

**Enregistrement CNAME :**
```
@    CNAME    10800    dns.formulr.app.
```

**Enregistrement TXT :**
```
_formulr-verify    TXT    300    "formulr-verify=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### OVH

1. Connectez-vous à votre [espace client OVH](https://www.ovh.com/manager/)
2. Allez dans **Domaines** → Votre domaine → **Zone DNS**
3. Cliquez sur **Ajouter une entrée**

**Pour le CNAME :**
- Type : `CNAME`
- Sous-domaine : `forms` (ou votre sous-domaine choisi)
- Cible : `dns.formulr.app.`

**Pour le TXT :**
- Type : `TXT`
- Sous-domaine : `_formulr-verify.forms`
- Valeur : `formulr-verify=xxxxxxxx` (valeur fournie par Formulr)

### Cloudflare

1. Connectez-vous à votre [dashboard Cloudflare](https://dash.cloudflare.com/)
2. Sélectionnez votre domaine
3. Allez dans **DNS** → **Records**
4. Cliquez sur **Add record**

**Pour le CNAME :**
- Type : `CNAME`
- Name : `forms`
- Target : `dns.formulr.app`
- Proxy status : **DNS only** (icône grise, pas orange)

**Pour le TXT :**
- Type : `TXT`
- Name : `_formulr-verify.forms`
- Content : `formulr-verify=xxxxxxxx`

::: danger Cloudflare - Proxy désactivé
Assurez-vous que le proxy Cloudflare est **désactivé** (icône grise) pour l'enregistrement CNAME, sinon la vérification échouera.
:::

### Google Domains / Squarespace

1. Connectez-vous à [Google Domains](https://domains.google.com/)
2. Sélectionnez votre domaine
3. Allez dans **DNS** → **Enregistrements personnalisés**

Ajoutez les deux enregistrements comme indiqué ci-dessus.

## Vérification

Après avoir configuré vos enregistrements DNS :

1. Retournez dans **Paramètres** → **Thème** dans Formulr
2. Le statut passera de "En attente de vérification DNS" à "Vérifié"
3. La propagation DNS peut prendre **jusqu'à 48 heures** (généralement quelques minutes à quelques heures)

::: tip Vérifier la propagation
Vous pouvez vérifier la propagation de vos enregistrements DNS avec des outils comme :
- [DNS Checker](https://dnschecker.org/)
- [WhatsMyDNS](https://www.whatsmydns.net/)
:::

## Certificat SSL

Une fois la vérification DNS réussie, Formulr génère automatiquement un certificat SSL pour votre domaine. Vos formulaires seront accessibles en HTTPS.

## Utilisation

Une fois configuré, vos formulaires seront accessibles via votre domaine personnalisé :

- Avant : `https://formulr.app/c/abc123`
- Après : `https://forms.votreentreprise.com/c/abc123`

Les anciens liens continuent de fonctionner et redirigent automatiquement vers votre nouveau domaine.

## Dépannage

### La vérification échoue

- Vérifiez que les enregistrements DNS sont correctement configurés
- Attendez la propagation DNS (peut prendre jusqu'à 48h)
- Vérifiez qu'il n'y a pas de faute de frappe dans les valeurs
- Si vous utilisez Cloudflare, assurez-vous que le proxy est désactivé

### Le domaine ne charge pas

- Vérifiez que le certificat SSL a bien été généré (peut prendre quelques minutes après la vérification)
- Videz le cache de votre navigateur
- Essayez en navigation privée

## Support

Pour toute question sur la configuration de votre domaine personnalisé, contactez notre support à [support@formulr.io](mailto:support@formulr.io).
