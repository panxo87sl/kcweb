export function buildVcf({ fullName, lastName, firstName, role, org, phone, urls }) {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${lastName};${firstName};;;`,
    `FN:${fullName}`,
    `ORG:${org}`,
    `TITLE:${role}`,
    `TEL;TYPE=CELL:${phone}`,
    ...urls.map(({ type, href }) => `URL;TYPE=${type}:${href}`),
    "END:VCARD",
  ].join("\r\n");
}
