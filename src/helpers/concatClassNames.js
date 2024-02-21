export default function concatClassNames(...args) {
  return args.filter((item) => !!item).join(' ');
}
