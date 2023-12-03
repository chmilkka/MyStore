
export default async function AppLoader(stores) {
    await stores.userStore.getAutenticatedUserInfo();

    stores.commonStore.setAppLoaded(true);
}