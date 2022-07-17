import { ref } from 'vue';

const list = ref([]);

function notify(params) {
  const item = {id: Date.now(), ...params};

  list.value.push(item);

  const timer = setTimeout(() => {
    list.value = list.value.filter(({id}) => id !== item.id);
    clearTimeout(timer);
  }, 5000);
}

const successNotify = (message) => notify({message, type: 'success'});
const errorNotify = (message) => notify({message, type: 'error'});

export default function() {
  return { list, successNotify, errorNotify };
}
