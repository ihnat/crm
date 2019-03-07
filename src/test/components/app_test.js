import { renderComponent, expect } from '../test_helper';
import App from '../../App';



descripe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });
  it('Header exists', () => {
    expect(component.find('.header')).to.exist;
  });
  it('Header exists', () => {
    expect(component.find('.header__brand')).to.contain('CRM');
  });


});
