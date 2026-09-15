/// <reference types='codeceptjs' />
type steps_file = typeof import('./custom_steps')['default'];
type ResembleHelper = import('../src/index');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, ResembleHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
