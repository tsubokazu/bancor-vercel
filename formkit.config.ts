import { ja, en } from '@formkit/i18n';
import { generateClasses } from '@formkit/themes';

export default {
  config: {
    locales: { ja, en },
    // アクティブなロケールを指定
    locale: 'ja',
    classes: generateClasses({
      text: {
        inner:
          'w-full border border-bancor-gray600 rounded-lg overflow-hidden focus-within:border-bancor-blue100',
        input:
          'w-full h-10 px-3 border-none rounded-lg text-base text-bancor-black100 placeholder-gray-400  bg-bancor-gray1000',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs',
      },
      textarea: {
        inner:
          'w-full h-[116px] border border-bancor-gray600 rounded-lg overflow-hidden focus-within:border-bancor-blue100',
        input:
          'w-full h-[116px] px-3 border-none rounded-lg text-base text-bancor-black100 placeholder-gray-400  bg-bancor-gray1000',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs',
      },
      date: {
        inner:
          'w-full border border-bancor-gray600 rounded-lg overflow-hidden focus-within:border-bancor-blue100',
        input:
          'w-full h-10 px-3 border-none rounded-lg text-base text-bancor-black100 placeholder-gray-400  bg-bancor-gray1000',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs',
      },
      email: {
        inner:
          'w-full border border-bancor-gray600 rounded-lg overflow-hidden focus-within:border-bancor-blue100',
        input:
          'w-full h-10 px-3 border-none rounded-lg text-base text-bancor-black100 placeholder-gray-400  bg-bancor-gray1000',
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
          'w-full border border-bancor-gray600 rounded-lg overflow-hidden focus-within:border-bancor-blue100',
        input:
          'w-full h-10 px-3 border-none rounded-lg text-base text-bancor-black100 placeholder-gray-400  bg-bancor-gray1000',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs',
      },
    }),
  },
};
