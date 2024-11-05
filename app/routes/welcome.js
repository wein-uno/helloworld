import Route from '@ember/routing/route';

export default class WelcomeRoute extends Route {
    model() {
        return ['Cheers', 'Salut', 'Skoal']
    }
}
