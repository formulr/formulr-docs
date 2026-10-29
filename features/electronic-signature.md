---
title: Electronic Signature
description: Have your documents signed directly in your forms with the Electronic signature module.
---

# Electronic Signature

The **Electronic signature** module lets you have a document (contract, mandate, statement...) signed directly within your form. The signed document is then attached to the response.

Signing is provided by [Formulr Trust](./formulr-trust), Formulr's own signature solution, used by default. [Yousign](./yousign) remains available on request.

## How it works

1. The respondent fills in the form.
2. On the signature module, they review the document, prefilled with their answers.
3. They sign directly in the form, without leaving the page.
4. The signed document is saved in the response and the field is set to **Approved**.

## Add a signature to a form

1. In the editor, add an **Electronic signature** module. It must be alone in its section.
2. Open its settings and choose the **Type**:
   - **Generic document**: the logged-in respondent signs;
   - **Personalized document**: you choose the **Signatories** (the respondent, or a person whose details are entered in another module of the form). This type is not available on the first step.
3. Choose the **Document to sign**:
   - **Add a PDF file**: a fixed document, uploaded with **Browse**;
   - **Use a template**: a [PDF template](./pdf-templates) filled with the answers. This choice shows when the campaign has at least one template (**Documents** tab).
4. In **Place the signature**, click **Place** and drag each signer's name to the right spot on the document. With a template, signatures can also be placed with anchors (see below).
5. You can add several documents with **Add another document**.
6. Option: **The signer can be an external person** lets the respondent name someone else, who receives the request by email.
7. Click **Validate**, then publish the campaign.

![Electronic signature module settings](/screenshots/esignature-module-en.png)

## Signature areas in a PDF template

In a template, place an anchor where the signature must appear:

```text
{{s1|signature|210|130}}
```

| Part | Role |
|------|------|
| `s1` | Signer number: `s1`, `s2`, `s3`... in order, with no gap |
| `210` | Width of the area |
| `130` | Height of the area |

Example with two signers:

```text
<p>The client:</p>
{{s1|signature|210|130}}

<p>The advisor:</p>
{{s2|signature|210|130}}
```

The template editor warns you if the numbering is incomplete. The anchor is invisible in the final document: only the signature shows.

## Several signers

- A single signer, the respondent: they sign **in the form**.
- Several signers, or an external signer: each one receives **an email invitation to sign**. The respondent sees a message telling them the requests have been sent.

## Tracking in the response

| Display | Meaning |
|---------|---------|
| **Waiting for signature** | The document has not been signed yet. |
| **Signature in progress** | At least one signature is in progress. |
| **Signatories statuses** | With several signers, each one is shown with their state (signed or pending). |
| **See signed document** | All signatures are done: open the signed PDF. |

![Signed document in the response](/screenshots/esignature-response-en.png)

An administrator can **Reset signature**: the signed or pending document is then lost and the respondent has to sign again.

## Good to know

- **Test mode**: until your account is switched to production, signatures are test signatures with no legal value. Request production through your **Support** access.
- The respondent can **download** their signed document at the end of the signature.
- Fields from previous steps are locked when the signature starts, so that the signed document matches the answers.

## See also

- [Formulr Trust](./formulr-trust): the default signature solution
- [Yousign](./yousign): on request
- [PDF Templates](./pdf-templates)
