---
title: Dossier analysis by AI
description: Have AI check each complete file against your own rules, and get a score, points of attention and a recommendation.
---

# Dossier analysis by AI

The **dossier analysis** has AI review a whole response: **the form, the metafields and all the documents provided**. It cross-checks them against **your business rules**, written in natural language, and gives you:

- a **score** out of 100;
- a **recommendation** (Approve, Needs completion, Reject);
- a **summary** and **points of attention** ranked by severity;
- the list of **missing documents**.

It is a decision aid for your teams: AI prepares the review, the decision stays human.

To check a specific document as soon as it is uploaded (identity document, KBIS...), see also [AI agents on documents](./ai-analysis).

::: info Plans
Dossier analysis is available with the **Business** and **Enterprise** plans.
:::

## Set up the analysis of a campaign

In the campaign, **Settings** tab, **AI Analysis Configuration** section:

- **Dossier analysis prompt**: your rules, in natural language (see the example below). Leave empty to turn the analysis off.
- **JSON output schema (optional)**: to enforce a precise result format, useful if you process the result by code (webhook). Leave empty for the default Formulr format (score, recommendation, alerts...).
- **Analyze automatically**: the analysis starts as soon as a client submits their file. Otherwise, you start it by hand from the response.

![AI analysis configuration of a campaign](/screenshots/ai-dossier-settings-en.png)

## Write a good prompt

- **Give the context**: what kind of file, for what purpose.
- **List the points to check**, from most to least important, with your thresholds (amounts, deadlines, mandatory documents...).
- **Ask to quote** the field or document concerned for each point: the review is faster.
- **Set the possible recommendations** and what leads to each one.
- **Forbid hasty conclusions**: AI must not infer what is not in the file, and must say when an element cannot be checked.

### Example: anti-money laundering file (TRACFIN)

This prompt is used in production for the compliance review of individual clients' files. You can copy it and adapt it to your own rules:

```text
Analyze the whole TRACFIN (anti-money laundering) file of an individual client, using the information entered in the form, the metafields and the documents provided.

Your goal is to identify any inconsistencies, missing information and points requiring particular attention, to help the compliance team in its review. You never make the final decision.

Check in particular:
- the consistency between the client's identity and the supporting documents provided (last name, first name, date of birth);
- the consistency of the contact details, the address and the declared situation;
- the completeness and apparent validity of the documents;
- the consistency between the professional situation, the declared income or resources and the transaction concerned;
- any contradictory or unusual information in the file;
- any element that may require additional checks given the information available.

Priority checks:
1. Identity document: present, legible, not expired at the date of the analysis. For a non-EU national, the document must be a passport.
2. Politically exposed person: if the client declares being a PEP, report it as a major point.
3. Source of funds: consistency between the declared source (Salary, Savings, Inheritance, Other), the monthly income bracket, the profession and the business sector. If "Other" is chosen, the details must be explicit and plausible.
4. Transaction above 150,000 €: proof of the source of funds must be present, legible, in the client's name or explained, and consistent with the declared source.
5. Geography: report if the nationality, the country of residence or the bank's country is on the FATF list of high-risk jurisdictions or jurisdictions under increased monitoring, or on the EU list of high-risk third countries. Also report a bank located in a country other than the country of residence without an apparent reason.
6. Formalities: accuracy statement checked and signed document present.

Clearly explain the elements that influenced the score and list the points to check, quoting for each one the field or document concerned.

End with a concise recommendation among:
"No major point of attention identified"
"Additional checks recommended" (missing, illegible or expired document, minor inconsistency to clarify with the client)
"In-depth human review recommended" (PEP client, high-risk country, transaction above 150,000 € without consistent proof, major inconsistency on the source of funds, suspected forged document)

Never conclude that a client is compliant or non-compliant and never infer information that is not in the file. If an element cannot be checked, say so.
```

## The result on the response

At the top of the response, a **Dossier analysis** banner shows the score, the recommendation and the AI confidence level.

![Dossier analysis banner on a response](/screenshots/ai-dossier-summary-en.png)

Click **View the analysis** for the details:

- **Overall score** and **recommendation**: Approve, Needs completion or Reject;
- **Summary** written by AI;
- **Breakdown by criterion**;
- **Points of attention**, ranked as Information, Warning or Critical;
- **Missing documents**;
- **History** of previous analyses, manual or automatic.

If the analysis was not started automatically, click **Analyze dossier**. After a change in the file, use **Run again**. The analysis takes a few moments: you can leave the page, the result shows up on its own.

## Good to know

- **AI does not decide**: it prepares the review. Approve or reject the file yourself.
- **The result depends on the prompt**: the more precise your rules, the more useful the analysis.
- **Illegible documents**: AI reports when a document cannot be read. Then ask the client for a better quality document.
