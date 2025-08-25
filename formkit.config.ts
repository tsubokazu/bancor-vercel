import { ja, en } from '@formkit/i18n';
import { generateClasses } from '@formkit/themes';

export default {
  config: {
    locales: { ja, en },
    classes: generateClasses({
      text: {
        inner:
          'w-full border border-bancor-gray600 rounded-lg focus-within:border-bancor-blue100',
        input:
          'w-full px-3 border-none rounded-lg text-base text-bancor-black100 placeholder-gray-400  bg-bancor-gray1000',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs',
      },
      textarea: {
        inner:
          'w-full border border-bancor-gray600 rounded-lg focus-within:border-bancor-blue100',
        input:
          'w-full px-3 border-none rounded-lg text-base text-bancor-black100 placeholder-gray-400 bg-bancor-gray1000',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs',
      },
      date: {
        inner:
          'text-bancor-gray600 w-full border border-bancor-gray600 rounded-lg focus-within:border-bancor-blue100',
        input:
          'w-full px-3 border-none rounded-lg text-base text-bancor-black100 placeholder-gray-400  bg-bancor-gray1000',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs',
      },
      email: {
        inner:
          'w-full border border-bancor-gray600 rounded-lg focus-within:border-bancor-blue100',
        input:
          'w-full px-3 border-none rounded-lg text-base text-bancor-black100 placeholder-gray-400  bg-bancor-gray1000',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs',
      },
      radio: {
        options: 'flex space-x-4 items-center',
        wrapper: 'flex items-center space-x-3',
        inner: 'block flex items-center justify-center',
        input: 'w-[30px] h-[30px] border border-bancor-gray600 rounded-full',
        label: 'block font-bold text-base ',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs',
      },
      tel: {
        inner:
          'w-full border border-bancor-gray600 rounded-lg focus-within:border-bancor-blue100',
        input:
          'w-full px-3 border-none rounded-lg text-base text-bancor-black100 placeholder-gray-400  bg-bancor-gray1000',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs',
      },
      select: {
        inner:
          'text-bancor-gray600 w-full border border-bancor-gray600 rounded-lg focus-within:border-bancor-blue100',
        input:
          'w-full px-3 border-none rounded-lg text-base text-bancor-black100 placeholder-gray-400  bg-bancor-gray1000',
        placeholder: 'text-bancor-gray600',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        selection: 'text-bancor-gray200 px-3',
        message: 'text-red-500 mb-1 text-xs',
      },
      file: {
        inner: 'flex space-x-4 items-center',
        accept: '.pdf,.doc,.docx,.xml,.md,.csv,.ppt,.pptx',
        fileItem: 'flex items-center justify-between space-x-2',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs',
      },
      checkbox: {
        wrapper: 'flex items-center space-x-3',
        input:
          'w-5 h-5 border border-bancor-gray600 rounded-lg flex items-center justify-center',
        message: 'text-red-500 mb-1 text-xs',
      },
      form: {
        message: 'text-red-500 mb-1 text-xs',
      },
    }),
  },
};
