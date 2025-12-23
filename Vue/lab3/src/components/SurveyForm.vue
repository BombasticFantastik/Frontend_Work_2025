<script setup>
import { computed } from 'vue'
import ProgressBar from './card/ProgressBar.vue'
import QuestionCard from './card/QuestionCard.vue'
import NavigationButtons from './card/NavigationButtons.vue'

const { questions, answers, currentStep } = defineProps({
  questions: {
    type: Array,
    default: () => [],
  },
  answers: {
    type: Object,
    default: () => ({}),
  },
  currentStep: {
    type: Number,
  },
})

const emit = defineEmits(['answer', 'go-next', 'go-back', 'finish'])

const currentQuestion = computed(() => questions[currentStep])
const currentAnswerQuestion = computed(() => answers[currentQuestion.value.id])
const isLastStep = computed(() => currentStep === questions.length - 1)

const canGoNext = computed(() => {
  const question = currentQuestion.value
  if (!question) {
    return false
  }
  const answer = answers[question.id]
  if (question.type === 'checkbox') {
    return Array.isArray(answer) && answer.length > 0
  }

  return !!answer
})

function onAnswer({ id, answer }) {
  emit('answer', { id, answer })
}

function onGoNext() {
  if (!canGoNext.value) return
  if (!isLastStep.value) emit('go-next')
  else emit('finish')
}

function onGoBack() {
  if (currentStep > 0) emit('go-back')
}
</script>

<template>
  <ProgressBar :current-step="currentStep" :total-steps="questions.length" />

  <QuestionCard
    v-if="currentQuestion"
    :question="currentQuestion"
    :answer-question="currentAnswerQuestion"
    @answer="onAnswer"
  />

  <NavigationButtons
    :can-go-back="currentStep > 0"
    :can-go-next="canGoNext"
    :is-last-step="isLastStep"
    @go-next="onGoNext"
    @go-back="onGoBack"
  />
</template>
