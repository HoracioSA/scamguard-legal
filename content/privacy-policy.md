<!--
  DRAFT — NOT LEGAL ADVICE, NOT A SUBSTITUTE FOR REVIEW BY A LICENSED ATTORNEY.
  This was drafted by an AI assistant, not a lawyer, based on a review of what the
  ScamGuard codebase actually does. The regional-rights sections (GDPR/CCPA) are
  written out in full using standard statutory language applied to this app's real
  technical facts — not generic filler — but they still need a licensed attorney's
  sign-off before you rely on them for actual compliance, particularly:
    - Whether you need an Article 27 GDPR EU representative (Section 9.1)
    - Whether you need a Data Protection Officer (Section 9.2)
    - The actual data processing agreement / transfer mechanism you have (or need)
      with your AI provider, subscription provider, and hosting provider (Section 10)
    - Whether CCPA/CPRA even applies to you (revenue/volume thresholds — Section 11)

  If you change what data the app collects or how it's processed, update this
  document to match — a Privacy Policy that doesn't match actual behavior is a
  bigger liability than having none.

  Every [BRACKETED PLACEHOLDER] below needs a real value filled in.
-->

# Privacy Policy

**Last updated: September 2, 2026**

This Privacy Policy explains what information the ScamGuard mobile application (the
"App") collects, how it's used, and your rights. It should be read together with our
[Terms and Conditions](/terms). It is issued by ScamGuard, reachable as described in
Section 15 ("we," "us," or "our"). [Some jurisdictions — Germany's Impressum
requirement is the standard example — require a natural person's identity and/or a
physical address to be stated in a public-facing privacy policy even for solo
operators; confirm whether this applies to you before relying on "ScamGuard" alone
as the named party and a contact email as the only address given.]

## 1. Our Approach

ScamGuard is designed around **not requiring a real identity**: there is no sign-up,
no username or password, no email address collection, and no linking to your Apple,
Google, or social media account. This holds even if you subscribe to ScamGuard Pro
(Section 2.6) — Apple, not us, handles your payment details. Section 2 describes
exactly what the App does collect and process instead.

## 2. Information We Collect and Process

### 2.1 Content you submit for analysis

When you use the Analyze feature (a ScamGuard Pro feature — see our Terms and
Conditions), we process:

- Text you paste or share into the App from another app.
- Screenshots you choose from your photo library (requested via a standard OS
  permission prompt — the App only accesses photos you explicitly select, never your
  full library automatically) and the text our AI extracts from them.
- A sender's phone number, email address, or handle, if you choose to enter one.

This content is sent to our backend and to our third-party AI provider (Section 3)
to generate a scam-risk assessment. To avoid re-analyzing identical, frequently
forwarded scam messages from scratch, we may cache an analysis result keyed to a
one-way hash of the submitted text (or image) — this cached copy is not linked to
you or your anonymous session, and is served to anyone who happens to submit the
same content.

### 2.2 Community reports you submit

When you report a sender, we store the sender identifier, category, any amount lost
or notes you provide, and the message content if you included it. This becomes part
of a directory visible to all users of the App. Submitting and browsing reports is
free and does not require a ScamGuard Pro subscription.

**This is not fully anonymous in one specific respect:** each report is stored with
your anonymous session identifier (Section 2.3) so we can detect when the same
installation reports the same sender again (to update rather than duplicate the
report) and count how many distinct installations reported a sender. This means our
records can determine that several reports came from the same anonymous session —
we just don't know who that session belongs to, because we never collect that.

**A note if you report someone else's information:** a report you submit may itself
contain another person's personal data (their phone number, email, or handle). By
submitting it, you confirm you are doing so in good faith to warn others about
suspected fraud, and you understand it will be visible to other users of the App.
See Section 9.2 for the legal basis on which we process this.

### 2.3 Your anonymous session identifier

On first use, the App requests a randomly generated session identifier from our
server and stores it on your device. It contains no personal information — it is a
random value, not derived from your name, device, or any account. It's used solely
to:

- Apply rate limits (so the App isn't abused to run up AI costs).
- Determine whether you have an active ScamGuard Pro subscription (Section 2.6).
- Let the community-reports system recognize repeat reports from the same
  installation (Section 2.2).

If you uninstall the App or clear its data, this identifier is discarded and a new,
unrelated one is issued the next time you use the App — including for subscription
status, so reinstalling the App may require restoring your purchase (available
in-app) to reconnect an existing subscription to a new identifier.

### 2.4 IP address

When the App requests a new anonymous session, our server briefly processes your IP
address to enforce a limit on how many sessions can be created from the same
network in a given period (an anti-abuse measure). We do not store your IP address
directly — we store a one-way derived value used only for this rate-limit check, not
the address itself. We do not otherwise log, store, or use your IP address for
identification, location tracking, or any other purpose.

### 2.5 Information stored only on your device (never sent to us)

The following stays in your device's local app storage and is never transmitted to
our servers:

- **My Reports**: a personal history of the reports you've submitted, kept so you
  can review them later.
- **Blocklist**: senders you've chosen to save/block.
- **Language preference.**
- **Onboarding status** (whether you've completed the introductory screens).

We have no server-side access to this data. It is not backed up by us, is not
synced across your devices, and is permanently lost if you uninstall the App or
clear its storage.

### 2.6 Subscription and payment information (ScamGuard Pro)

If you subscribe to ScamGuard Pro, your purchase is processed entirely by Apple
through the App Store. **We never receive or process your payment card, billing
address, or other payment details — Apple handles all of that directly.**

To determine whether your anonymous session currently has an active ScamGuard Pro
subscription, we use RevenueCat, a subscription-management platform (Section 4).
RevenueCat receives your anonymous session identifier (used as your subscriber ID
within RevenueCat) and subscription-related data from Apple on our behalf — such as
which product you purchased, purchase and renewal dates, and whether the
subscription is active, expired, or in a trial period. This is used solely to
unlock ScamGuard Pro features for your session and is not linked to your name or any
other real-world identity, because we don't collect one.

## 3. Third-Party AI Processing

Content described in Section 2.1 is sent to OpenAI for
processing, using their API. We do not control and are not responsible for that
provider's own data handling practices; review their privacy policy and API data
usage terms directly: https://openai.com/policies/. Do not submit content in the
App that you would not want processed by a third-party AI service.

## 4. Subscription and Payment Processing

If you subscribe to ScamGuard Pro, described in Section 2.6, your payment itself is
processed entirely by Apple through the App Store — we never receive your payment
card or billing details. To track whether your anonymous session has an active
subscription, we use RevenueCat as our subscription-management service provider;
RevenueCat receives your anonymous session identifier and subscription data from
Apple (Section 2.6) to perform this function on our behalf and does not use it for
its own independent purposes. Review RevenueCat's privacy policy directly:
https://www.revenuecat.com/privacy/.

## 5. What We Don't Do

As of this policy's last update, the App does not:

- Require or collect your name, email address, phone number, or any account
  credentials.
- Use third-party analytics, advertising, or tracking SDKs.
- Sell or rent your information to third parties, and does not "share" it for
  cross-context behavioral advertising as that term is used in the CCPA/CPRA.
- Access your contacts, precise location, camera, microphone, or full photo
  library — only the specific photo you choose to share for screenshot analysis.
- Receive or store your payment card details — Apple processes all ScamGuard Pro
  payments directly (Section 2.6).

If this changes in a future version of the App, we will update this policy
accordingly.

## 6. Data Retention

- **Community reports** and the **analysis/OCR cache** are retained indefinitely on
  our servers, as they form the shared community directory and the cost-saving
  cache described above. [Add a deletion process here if/when one is built — the
  current version of the App has no in-app way to request removal of a specific
  server-stored report, since reports carry no identity we could match a deletion
  request against beyond the anonymous session that submitted it.]
- **Subscription status** (Section 2.6) is retained by us and by RevenueCat for as
  long as needed to determine your entitlement to ScamGuard Pro, and per RevenueCat's
  own retention practices for the underlying transaction data Apple provides them.
- **Local device data** (Section 2.5) is retained until you delete it in the App
  (where available) or uninstall the App.
- We retain the categories above only as long as necessary for the purposes
  described in this policy, or as required by applicable law.

## 7. Your Choices

- **Blocking/unblocking a sender** and **removing an entry from My Reports** are
  available directly in the App and take effect immediately on your device.
- **Managing or canceling your ScamGuard Pro subscription** is done through your
  device's Settings app under your Apple ID → Subscriptions, not within the App
  itself — see our Terms and Conditions.
- **Uninstalling the App** removes all locally stored data (Section 2.5) and your
  anonymous session identifier. It does not cancel an active subscription.
- For rights beyond this (access, deletion, correction of server-side data), see
  Sections 9 and 11 below, and note the identity-verification limitation described
  there — it applies to all such requests given the App's anonymous design.

## 8. Legal Basis for Processing (applies to users in the EEA, UK, and Switzerland)

Where the GDPR or UK GDPR applies, we rely on the following legal bases under
Article 6(1):

- **Performance of a contract** (Art. 6(1)(b)): processing your submitted content,
  your anonymous session identifier, and your subscription status is necessary to
  provide the analysis, community-reporting, and ScamGuard Pro features you're
  actively using, as described in our Terms and Conditions.
- **Legitimate interests** (Art. 6(1)(f)): we process IP-derived rate-limit data, and
  we process community reports that may name a third party, in pursuit of our and
  our users' legitimate interest in preventing fraud and abuse of the App (this is
  expressly recognized as a legitimate interest under GDPR Recital 47). Where we
  rely on legitimate interests, we have considered that this processing is
  proportionate and within your reasonable expectations as a user of a
  scam-reporting tool.
- We do not use your data for any purpose requiring your consent under Article 6(1)(a)
  at this time. If that changes, we will obtain consent separately before doing so.

## 9. Your Rights Under GDPR / UK GDPR

If you are located in the EEA, UK, or Switzerland, you have the right to:

- **Access** the personal data we hold about you.
- **Rectification** of inaccurate or incomplete personal data.
- **Erasure** ("right to be forgotten") of your personal data, subject to Section
  9.1 below.
- **Restriction** of processing in certain circumstances.
- **Data portability**, for data you provided to us that we process by automated
  means under a contract or your consent.
- **Object** to processing based on our legitimate interests (Section 8), unless we
  demonstrate compelling legitimate grounds that override your interests.
- **Lodge a complaint** with your local data protection supervisory authority. [If
  applicable, name your lead EU/UK supervisory authority here.]

### 9.1 A structural limitation: we often cannot verify who you are

The App is deliberately built so that we do not collect the information needed to
tie a request to a specific person or a specific piece of data we hold — there is
no account, email, or name in our systems to match a request against. Under GDPR
**Article 11** ("Processing which does not require identification"), where a
controller can demonstrate it is not in a position to identify a data subject, it is
not obligated to acquire additional information solely to comply with the GDPR,
*unless* the data subject provides additional information enabling their
identification (e.g., the specific text of a report you submitted, or the
approximate date and content of an analysis you ran) — in which case we will use
that information in good faith to locate and act on the relevant data.

### 9.2 Your local blocklist and report history are already fully in your control

Because "My Reports" and your blocklist (Section 2.5) exist only on your device, the
most direct way to exercise access, correction, portability (the data is already
readable on your device), or erasure over that category of data is through the App
itself or by uninstalling it — we have no copy to separately act on.

## 10. International Data Transfer

Our servers and our third-party AI and subscription providers may process data in
countries outside of where you are located, including the United States. [Add
detail here about where your servers and your providers actually process data,
relative to your users' locations.] Where we transfer personal data out of the EEA,
UK, or Switzerland, we rely on appropriate safeguards recognized under GDPR/UK GDPR,
such as the European Commission's Standard Contractual Clauses, to the extent
applicable. [Confirm and reference the actual data processing agreement / transfer
mechanism you have in place with your AI provider, subscription provider, and
hosting provider — this cannot be confirmed without knowing your actual vendor
agreements.]

### 10.1 Possible obligation to appoint an EU representative

If the App is offered to, and processes personal data of, individuals in the EEA or
UK at scale, GDPR Article 27 / UK GDPR may require you to designate a representative
established in the EEA/UK. [Assess with counsel whether this applies to your actual
user base and, if so, add the representative's contact details here.]

### 10.2 Possible obligation to appoint a Data Protection Officer

GDPR Article 37 requires a Data Protection Officer in certain circumstances
(e.g., large-scale, regular and systematic monitoring of individuals, or large-scale
processing of special categories of data). [Assess with counsel whether this applies
at your actual operating scale; if so, add DPO contact details here.]

## 11. Your Privacy Rights Under CCPA/CPRA (California Residents)

[Confirm with counsel whether the CCPA/CPRA's applicability thresholds (based on
revenue, volume of California consumers' data, or revenue from selling/sharing
personal information) apply to your business before relying on this section as a
complete compliance statement.]

### 11.1 Categories of personal information we collect

Mapped to the categories defined in Cal. Civ. Code § 1798.140:

| Category | Collected? | What / Source |
|---|---|---|
| Identifiers | Yes | Your anonymous session identifier (Section 2.3), generated by us, not from you directly |
| Commercial information | Yes, if you subscribe | Purchase/subscription history for ScamGuard Pro (product purchased, purchase/renewal dates, status) via Apple and RevenueCat (Section 2.6) |
| Internet or network activity | Yes | Content you submit for analysis and reports (from you); IP address, processed only in derived/hashed form (automatically, from your device) |
| Geolocation data | No | We do not collect precise geolocation. IP-derived data is used only for rate-limiting, not location purposes |
| Financial information, biometric, professional, education, protected-class information | No | Not collected — Apple, not us, processes your payment details |
| Inferences | No | The App generates a risk assessment about submitted *content*, not an inference profile about you as an individual |

### 11.2 How we use it and who we disclose it to

Used for the purposes described in Section 2 (providing the analysis,
community-report, and ScamGuard Pro features, and anti-abuse rate limiting) and
disclosed to our service providers (our hosting infrastructure, our AI provider —
Section 3, and, if you subscribe, our subscription-management provider — Section 4)
solely to provide the App's functionality on our behalf.

**We do not sell or share personal information**, as those terms are defined by the
CCPA/CPRA, and have not done so in the preceding 12 months.

### 11.3 Your rights

Subject to certain exceptions, California residents have the right to:

- **Know/access** the specific pieces and categories of personal information we
  have collected about you.
- **Delete** personal information we have collected from you.
- **Correct** inaccurate personal information we maintain about you.
- **Opt out** of the sale or sharing of personal information (not applicable — we
  don't do this, see 11.2).
- **Limit the use of sensitive personal information** (not applicable — we don't
  collect any, per the table above).
- Not receive discriminatory treatment for exercising any of these rights.
- Designate an authorized agent to make a request on your behalf.

**The same verification limitation described in Section 9.1 applies here**: our
anonymous architecture means we generally have no way to verify that a request
relates to a specific individual's data unless you can identify the specific
content or report at issue.

To exercise these rights, contact us at contact@horaciosapato.com.

### 11.4 Global Privacy Control

Because we do not sell or share personal information, a Global Privacy Control (or
similar opt-out preference) signal has no additional effect on our processing, but
we will honor it as a valid CCPA opt-out-of-sale/-sharing request to the extent it
would otherwise apply.

## 12. Children's Privacy

The App is not directed at children under 13, and we do not knowingly collect
personal information from anyone under that age — 13 is also the threshold at which
the US's COPPA applies to online services, so this is a deliberate choice, not just
a number. [If you have users in the EEA/UK, note that GDPR's default digital-consent
age is 16 (member states may set it as low as 13) — a minimum age of 13 may be below
the age at which a minor can independently consent to data processing in some EU
countries; confirm with counsel whether that gap matters for your actual user base.]
Given the App does not collect real-world identity information, our ability to
detect a child user is inherently limited — but if you believe a child has used the
App in a way that concerns you, contact us at contact@horaciosapato.com and we will
investigate and take appropriate action, which may include deleting identifiable
content associated with the report.

## 13. Security

We use reasonable technical measures to protect the information described above,
but no method of transmission or storage is completely secure, and we cannot
guarantee absolute security.

## 14. Changes to This Policy

We may update this Privacy Policy from time to time. The "Last updated" date above
reflects the most recent revision. For material changes affecting your rights, we
will provide reasonably prominent notice (such as an in-app notice) in addition to
updating this page. Continued use of the App after changes take effect constitutes
acceptance of the revised policy.

## 15. Contact

Questions about this Privacy Policy, or requests to exercise the rights described
above, can be sent to contact@horaciosapato.com.
