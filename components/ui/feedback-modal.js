import Modal from './modal'
import { useState } from 'react'

export default function FeedbackModal({ open, setOpen }) {
  const [feedback, setFeedback] = useState(null)

  const feedbackOptions = [
    { label: 'very_unhappy', value: 1, emoji: '😠' },
    { label: 'unhappy', value: 2, emoji: '🙁' },
    { label: 'neutral', value: 3, emoji: '😐' },
    { label: 'happy', value: 4, emoji: '🙂' },
    { label: 'very_happy', value: 5, emoji: '😄' }
  ]

  const onFeedbackClick = (value) => {
    if (value === feedback) {
      setFeedback(null)
    } else {
      setFeedback(value)
    }
  }

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} title="Help us improve">
      <div className="w-full overflow-y-auto border-t pb-6">
        <h1 className="mb-8 pt-8 text-sm text-stone-700">
          How helpful is the Transfer calculator?
        </h1>

        <div className="flex h-16 w-full items-center justify-center space-x-4 px-12">
          {feedbackOptions.map((option, index) => (
            <div
              key={index}
              className="flex h-full w-full cursor-pointer items-center justify-center"
            >
              <input
                type="radio"
                name="feedback"
                className="hidden"
                id={option.label}
                value={option.value}
                onClick={() => onFeedbackClick(option.value)}
              />
              <label
                htmlFor={option.label}
                className={`cursor-pointer transition-all hover:text-4xl ${
                  feedback === option.value
                    ? 'text-4xl opacity-100'
                    : 'text-2xl opacity-40'
                }`}
              >
                {option.emoji}
              </label>
            </div>
          ))}
        </div>

        <p className="my-4 text-sm text-stone-600">
          Let us know what you think — just don&apos;t include any personal
          details.
        </p>

        <p className="my-4 text-sm text-stone-600">
          When you leave feedback, we might reach out to discuss your thoughts.
          If you don&apos;t want to be contacted, please mention this in your
          feedback. (Optional)
        </p>

        <textarea
          name="message"
          id="message"
          className="h-16 w-full rounded-lg border border-stone-400 p-5"
        />

        <button
          onClick={() => setOpen(false)}
          disabled={!feedback}
          className="mt-2 w-full rounded-full bg-stone-900 py-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-stone-700 disabled:cursor-not-allowed disabled:bg-stone-400"
        >
          Done
        </button>
      </div>
    </Modal>
  )
}
