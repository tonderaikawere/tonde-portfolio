export default function FormSubmitActivatePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-lg border border-gray-200 dark:border-gray-800 p-6">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Activate FormSubmit
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Submit this form once to trigger FormSubmit to send an activation email to
          tondekawere@gmail.com.
        </p>

        <form
          className="mt-6 flex flex-col gap-4"
          method="POST"
          action="https://formsubmit.co/tondekawere@gmail.com"
        >
          <input type="hidden" name="_subject" value="FormSubmit Activation" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </span>
            <input
              name="email"
              type="email"
              required
              className="bg-gray-50 dark:bg-[#18191E] border border-gray-300 dark:border-[#33353F] text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="you@example.com"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Message
            </span>
            <textarea
              name="message"
              required
              className="bg-gray-50 dark:bg-[#18191E] border border-gray-300 dark:border-[#33353F] text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5 min-h-[120px]"
              placeholder="Activation test message"
              defaultValue="Activation test message"
            />
          </label>

          <input type="hidden" name="_replyto" value="tondekawere@gmail.com" />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg w-full transition-colors duration-300 text-sm"
          >
            Send Activation Email
          </button>
        </form>
      </div>
    </main>
  );
}
