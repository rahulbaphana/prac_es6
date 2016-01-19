
function getOrder(orderId) {
    return Promise.resolve({userId: 35});
    //return Promise.reject(Error("Error for order #"+orderId));
}

function getUser(userId) {
    return Promise.resolve({companyId: 35});
}

function getCompany(companyId) {
    return Promise.resolve({name: "EE"});
}

export {getOrder, getCompany, getUser};