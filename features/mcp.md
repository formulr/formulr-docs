---
title: Claude & MCP Connector
description: Connect Claude or any MCP client to Formulr to build forms, generate documents and process responses.
---

# Claude & MCP Connector

The Formulr connector lets Claude (and any client that supports the Model Context Protocol) work with your Formulr account: build forms, write PDF templates, review and process responses.

| | |
|---|---|
| **Server URL** | `https://mcp.formulr.io/mcp` |
| **Transport** | Streamable HTTP (remote MCP server) |
| **Authentication** | OAuth 2.0 with dynamic client registration and PKCE |
| **API key** | Not required |

## Setup

### Claude

1. Open **Customize** > **Connectors**
2. Click **Add custom connector**
3. Paste `https://mcp.formulr.io/mcp`
4. Click **Connect** and sign in with your Formulr account

**Team and Enterprise plans**: an organization admin first adds the connector in **Organization settings** > **Connectors**. Members then connect individually with their own Formulr account.

The connector will also be available in the Claude connectors directory.

### Other MCP clients

**Claude Code**

```bash
claude mcp add --transport http formulr https://mcp.formulr.io/mcp
```

Then run `/mcp` in Claude Code and authenticate.

**ChatGPT (developer mode)**

1. **Settings** > **Connectors** > **Advanced** > enable **Developer mode**
2. Click **Create** and paste `https://mcp.formulr.io/mcp`
3. Sign in with your Formulr account

## Permissions and Security

- The connector acts **as the signed-in user**: it only reaches the companies and campaigns that user can access in the Formulr dashboard, with the same permissions.
- Access is granted through OAuth. You can **disconnect** the connector at any time from your MCP client to remove its access.
- Tools that write or delete data are annotated as such, so the client asks for your confirmation before running them.
- Formulr does not store your conversations. Only the parameters of each tool call are sent to the Formulr API.

## Available Tools

The connector exposes the 42 tools below. **Read** tools never change data, **Create** tools add new data, **Modify** tools overwrite existing data and **Delete** tools remove it. Modify and Delete tools are annotated as destructive, so your MCP client can ask for confirmation before running them.

### Campaigns

| Tool | Type | Description |
|------|------|-------------|
| `list_campaigns` | Read | List campaigns with pagination and filters |
| `get_campaign` | Read | Get the details of a campaign |
| `create_campaign` | Create | Create a campaign |
| `update_campaign` | Modify | Update name, subtitle, description or internal name |
| `update_campaign_status` | Modify | Set a campaign to draft, published or unpublished |
| `duplicate_campaign` | Create | Duplicate an existing campaign |

### Form Schema

| Tool | Type | Description |
|------|------|-------------|
| `list_module_types` | Read | List available field types with JSON examples |
| `get_step_schema` | Read | Get the full schema of a step |
| `create_step` | Create | Add an empty step to a campaign |
| `update_step_schema` | Modify | Replace the schema of a step (sections, modules, logic, thank-you screens) |
| `delete_step` | Delete | Delete a step |
| `get_liquid_module_guide` | Read | Guide to write interactive Liquid modules |

### Documents and E-signature

| Tool | Type | Description |
|------|------|-------------|
| `get_liquid_guide` | Read | Guide to write Liquid document templates |
| `list_campaign_variables` | Read | List the variables available in a campaign's templates |
| `list_document_templates` | Read | List the templates of a campaign |
| `list_company_document_templates` | Read | List the templates of all company campaigns, to reuse a house style |
| `get_document_template` | Read | Get a template with its Liquid content |
| `preview_document_template` | Read | Render a template and report errors and warnings |
| `create_document_template` | Create | Create a template |
| `update_document_template` | Modify | Update title, content or locale |
| `delete_document_template` | Delete | Delete a template |
| `get_esignature_config` | Read | Show how a campaign's e-signature module is set up |
| `configure_esignature` | Modify | Link a document template to the e-signature module |

### Responses

| Tool | Type | Description |
|------|------|-------------|
| `list_responses` | Read | List responses across campaigns with filters |
| `list_campaign_responses` | Read | List the responses of one campaign |
| `get_response` | Read | Get a response with its form data |
| `get_response_activity` | Read | Get the activity history of a response |
| `update_response_status` | Modify | Change the status of one or more responses |
| `assign_response` | Modify | Assign a response to admin users |
| `export_responses` | Read | Request an XLSX export of a campaign's responses |

### Branding and Storefront

| Tool | Type | Description |
|------|------|-------------|
| `get_company_theme` | Read | Get the branding theme (logo, fonts, colors) |
| `update_company_theme` | Modify | Update the branding theme |
| `get_storefront_liquid_guide` | Read | Reference for storefront Liquid templates |
| `get_storefront_defaults` | Read | Get the default storefront theme |
| `list_storefront_templates` | Read | List the company's storefront templates |
| `get_storefront_template` | Read | Get a template's draft and published status |
| `list_storefront_template_versions` | Read | List the version history of a template |
| `create_storefront_template` | Create | Create a storefront template |
| `update_storefront_template` | Modify | Update a template draft (not live until published) |
| `publish_storefront_template` | Modify | Publish the draft to the live storefront |
| `rollback_storefront_template` | Modify | Restore a past version as a new draft |
| `delete_storefront_template` | Delete | Delete a storefront template |

## Example Prompts

- "Create a client onboarding form with company name, contact details and a VAT number field that only appears for companies based in the EU."
- "Summarize this week's responses on the 'Supplier registration' campaign, then approve the ones that are complete."
- "Create a PDF service contract template from my 'Client onboarding' campaign and preview it."

## Limitations

- `export_responses` is asynchronous: the export is generated in the background and a download link is **sent by email**.
- File uploads (images, PDFs to sign) are done in the dashboard.
- E-signature of an uploaded PDF and per-response signature settings are managed in the dashboard.

## Troubleshooting

| Symptom | Solution |
|---------|----------|
| "Unknown client" error when connecting | Remove the connector, then add it again to register a fresh client |
| `401` error during a conversation | Your session has expired: disconnect and reconnect the connector |

## Support and Privacy

- Support: [support@formulr.io](mailto:support@formulr.io)
- [Privacy policy](https://www.formulr.io/en/legal/privacy)

## Next Steps

- [Module Types](/features/modules) - Fields you can build
- [PDF Templates](/features/pdf-templates) - Document templates
- [API & Webhooks](/features/api-webhooks) - Integrate Formulr
