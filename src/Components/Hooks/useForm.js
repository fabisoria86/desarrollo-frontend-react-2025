import { useState, useCallback  } from "react";

const useForm = (initialState ={}) => {
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const resetForm = useCallback((newValues = initialState) => {
        setFormData(newValues);
    }, [initialState]);


    const clearForm = () => {
        setFormData({
          username: "",
          email: "",
          password: "",
          module: "",
        });
      };


    return {
        formData,
        handleChange,
        resetForm,
        clearForm
    };
    
};

export default useForm;