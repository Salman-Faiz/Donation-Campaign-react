

const getStoredDataFromLS = () => {

    const storedDonations = localStorage.getItem('donation-list')
    if (storedDonations) {
        return JSON.parse(storedDonations);
    }
    return [];
}

const saveDonationToLocalStorage = (id) => {

    const storedDataFromLS = getStoredDataFromLS();
    const existsData = storedDataFromLS.find(jobId => jobId === id);
    if(!existsData){
        storedDataFromLS.push(id);
        localStorage.setItem('donation-list', JSON.stringify(storedDataFromLS))
    }



}
export { getStoredDataFromLS, saveDonationToLocalStorage }