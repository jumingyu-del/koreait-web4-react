import React, { useState } from 'react'
import { useToastStore } from '../Zustand/store/toastStore';
import { useDeleteProduct, useUpdateProduct } from './useProducts';

export default function ProductItem({product}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editVal, setEditVal] = useState({
        name: product.name,
        price: product.price
    });
    const {showToast} = useToastStore();
    const updateMutation = useUpdateProduct();
    const deleteMutation = useDeleteProduct();

    const handleUpdate = () => {
        updateMutation.mutate(
          {
            id: product.id,
            // mutationFn에 정의한 js 객체 키와 맞춰줘야함
            product: editVal
          },
          {
            onSuccess: () => {
                setIsEditing(false);
                showToast("수정완료");
            }, 
            onError: () => {
                console.log(error.message);
                if(error.response) { // 서버에서 내려준 에러
                    console.log(error.response.data);
                }
            }
          }
        )
    }

    const handleDelete = () => {
        deleteMutation.mutate(product.id, {
            onSuccess: () => {
                showToast("삭제 완료");
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    const handleEdit = (e) => {
        const {name, value} = e.target;
        setEditVal((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

  return (
    <tr>
        <td>{product.id}</td>
        <td>
            {
                isEditing
                ? <input 
                    type='text'
                    name='name'
                    value={editVal.name}
                    onChange={(e) => handleEdit(e)}
                />
                : product.name
            }
        </td>
        <td>
             {
                isEditing
                ? <input 
                    type='nember'
                    name='price'
                    value={editVal.price}
                    onChange={(e) => handleEdit(e)}
                />
                : product.price
            }
        </td>
        <td>
            {
                isEditing
                ? (<>
                    <button 
                        onClick={handleUpdate}
                        disabled={updateMutation.isPending}
                    >
                        {updateMutation.isPending ? "처리중" : "완료"}
                    </button>
                    <button onClick={() => setIsEditing(false)}>취소</button>
                </>)
                : (<>
                    <button onClick={() => setIsEditing(true)}>수정</button>
                    <button onClick={handleDelete}>삭제</button>
                </>)
            }
        </td>
    </tr>
  )
}
