export default [
    {
        label: 'Home',
        route: '/home',
    },
    {
        label: 'SubmitItem',
        route: '/submititem'
    },
    {
        label: 'Products',
        route: '/products',
            children: [
                {
                    label: 'Personal Items',
                    route: '/personalitems'
                },
                {
                    label: 'Services',
                    route: '/services'
                 },
                {
                    label: 'Automotive',
                    route: '/automotive'
                }
            ]
    },
    {
        label: 'Pasta',
    }
]