import { useGetUserDetailsQuery } from '@/features/auth/authApi';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
    const router = useRouter()
    const { id } = router.query
    console.log(id)
    const { data, isLoading, error, isError, refetch, } = useGetUserDetailsQuery(id, {
        skip: id ? false : true,
        // pollingInterval: 3000,
    }) || {}
    const { email, name } = data || {}    // console.log(data)
    const { product } = useSelector(state => state || {})
    console.log(product)
    console.log(data)
    console.log(error)
    return (
        <div>
            <p>{email}</p>
            <p>{name}</p>
        </div>
    );
};

export default Details;