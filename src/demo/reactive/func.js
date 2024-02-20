import { reactive, effect } from "vue";

let dummy;

export const dataEffectDemo = () => {
  const obj = reactive({ count: 0 });
  effect(() => {
    dummy = obj.value * 2;
    console.log("dummy", dummy);
  });

  console.log(obj.count); // 0

  obj.count++;
  console.log(obj.count); // 1
  console.log(dummy); // 2

  obj.count++;
  console.log(obj.count); // 2
  console.log(dummy); // 4
};
