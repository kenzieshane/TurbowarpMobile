declare module '@turbowarp/json' {
  /**
   * Parse a JSON object like JSON.parse()
   * Attempts to use JSON.parse first, falling back to our custom parser if the the native parser fails.
   */
  function parse(object: string): unknown;

  /**
   * Parse a JSON object like JSON.parse()
   * Only uses our custom parser. You should use parse() instead.
   */
  function _parse(object: string): unknown;

  /**
   * Stringify a JSON object like JSON.stringify()
   */
  function stringify(object: unknown): string;
}
