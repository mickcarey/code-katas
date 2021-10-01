export function reverseWords(str: string): string {
  return str.split(' ')
    .reduce((accum: string,current: string) => accum += ' ' + current
      .split('')
      .reduce((_accum: string, _current: string) => _accum = _current + _accum, ''), '')
    .trim();
}