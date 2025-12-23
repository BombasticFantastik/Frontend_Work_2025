<script setup>
const props = defineProps({
  answers: {
    type: Object,
    required: true,
  },
  surveyQuestions: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['reset-survey'])

function getLabel(question) {
  const answer = props.answers[question.id]
  if (typeof answer === 'undefined' || answer === null) {
    return '-'
  }
  if (question.type === 'text') {
    return answer
  }
  if (Array.isArray(answer)) {
    return question.options
      .filter((o) => answer.includes(o.value))
      .map((o) => o.label)
      .join(', ')
  }
  return question.options.find((o) => o.value === answer).label
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow p-6">
    <h2 class="text-xl font-semibold mb-4">Ваши ответы</h2>
    <div class="space-y-3">
      <div v-for="question in surveyQuestions" :key="question.id" class="border rounded-lg p-3">
        <div class="text-sm text-gray-500">{{ question.title }}</div>
        <div class="font-medium">{{ getLabel(question) }}</div>
      </div>
    </div>
    <button
      class="mt-6 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
      @click="emit('reset-survey')"
    >
      Сбросить ответы
    </button>
  </div>
</template>
