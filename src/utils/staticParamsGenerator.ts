export function staticParamsGenerator(to:number) {
  const result:{id:string}[] = [];
  if (to < 1) return result;
  for (let i = 1; i <= to; i++) {
    result.push({id:i.toString()});
  }
  return result;
}