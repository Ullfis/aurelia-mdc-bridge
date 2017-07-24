import { MdcSnackbar, IMdcSnackbarOptions } from '../../bridge/index';

export class Snackbars {
  private mdcSnackbar: MdcSnackbar;

  private onClick() {
    this.mdcSnackbar.show();
  }
  private onClick2() {
    const newSnackbar = new MdcSnackbar();
    newSnackbar.show({
      message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.`,
      actionText: 'Hide',
      multiline: true,
      actionOnBottom: true,
      actionHandler: this.onClick3
    });
  }
  private onClick3() {
    // tslint:disable-next-line:no-console
    console.log('on action');
  }
}
