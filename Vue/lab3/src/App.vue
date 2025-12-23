<script setup>
import { ref } from 'vue'
import SurveyForm from './components/SurveyForm.vue'
import SummaryPanel from './components/SummaryPanel.vue'
import QuestionCreator from './components/QuestionCreator.vue'
import { surveyQuestions as initialSurveyQuestions } from './data/questions.js'

const surveyQuestions = ref([...initialSurveyQuestions])
const answers = ref({})
const currentStep = ref(0)

function onAnswer({ id, answer }) {
  answers.value[id] = answer
}

function resetSurvey() {
  answers.value = {}
  currentStep.value = 0
}

function finishSurvey() {
  alert(['Опрос закончен!'].join('\n'))
  resetSurvey()
}

function addQuestion(newQuestion) {
  surveyQuestions.value.push(newQuestion)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <div class="max-w-6xl mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6">Опрос о путешествиях</h1>

      <div class="grid gap-6 md:grid-cols-2">
        <div class="bg-white rounded-2xl shadow p-6 h-fit">
          <SurveyForm
            :questions="surveyQuestions"
            :answers="answers"
            :currentStep="currentStep"
            @answer="onAnswer"
            @go-next="currentStep++"
            @go-back="currentStep--"
            @finish="finishSurvey"
          />
        </div>

        <div class="space-y-6">
          <SummaryPanel
            :answers="answers"
            :survey-questions="surveyQuestions"
            @reset-survey="resetSurvey"
          />

          <QuestionCreator @create="addQuestion" />
        </div>
      </div>
    </div>
  </div>
</template>
