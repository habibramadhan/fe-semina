import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import SBreadCrumb from '../../components/BreadCrumb'
import Sform from './form';
import { useNavigate, useParams } from 'react-router-dom';
import SAlert from '../../components/Alert';
import Swal from 'sweetalert2';
import { getData, putData } from '../../utils/fetch';

export default function CategoriesEditPage() {
    const navigate = useNavigate();
    const {id} = useParams();

    const [errors, setErrors] = useState({
        status: false,
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
    });

    const getOneCategories = async (id) => {
        const res = await getData(`/v1/cms/categories/${id}`);
        setForm({ ...form, name: res.data.data.name });
    };

    useEffect(() => {
      getOneCategories(id);
    }, [])
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
        setIsLoading(true);
        const res = await putData(`/v1/cms/categories/${id}`,
        form
        );

        if (res.status === 200) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Berhasi Ubah Data ${res.data.data.name}`,
                showConfirmButton: false,
                timer: 1500
            });
            setIsLoading(false);
            navigate('/categories');
        }
        } catch (err) {
            setIsLoading(false)
            setErrors({ ...errors, status: true, message: err.response.data.msg });
        }
    };

  return (
    <Container>
        <SBreadCrumb textSecound='Categories'
            urlSecound='/categories'
            textThird='Edit'
        />

        {errors.status && <SAlert variant='danger' message={errors.message} />}

        <Sform
        handleSubmit={handleSubmit}
        form={form}
        handleChange={handleChange}
        isLoading={isLoading}
        edit
        />
    </Container>
  )
}
