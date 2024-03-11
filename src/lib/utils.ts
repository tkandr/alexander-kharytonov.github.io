export function truncateAddress(address: string, offset: number = 5): string {
  const match = address.match(
    new RegExp(
      `^(0x[a-zA-Z0-9]{${offset}})[a-zA-Z0-9]+([a-zA-Z0-9]{${offset}})$`
    )
  );

  return !match ? address : `${match[1]}…${match[2]}`;
}
