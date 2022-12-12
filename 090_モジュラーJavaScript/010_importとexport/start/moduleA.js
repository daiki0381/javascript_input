// export (ファイル内で何度でも使用可能)

export let publicVal = 'publicVal';

export function publicFn() {
  console.log('publicFn');
}

// export default (ファイル内で1度のみ使用可能)
export default {
  defaultVal: 'defaultVal',
  defaultFn() {
    console.log('defaultFn');
  }
}
