var roles = {
    admin: {
        homepage: "/user/adminDashboard",
        actions: ["can_create_customer","can_view_customer_list","can_edit_customer"]
    },
    salesExec: {
        homepage: "/user/salesExecDashboard",
        actions: ["can_view_customer_profile"]
    }
};

module.exports = roles;