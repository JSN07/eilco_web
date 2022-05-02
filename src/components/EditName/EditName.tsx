import React from 'react';

type EditNameProps = {
	updateName: any;
};

const EditName = ({updateName} : EditNameProps) => {
  
  return (
    <div>
      <input type="text" onChange={(tt) => updateName(tt)}/> 
    </div>  
  )
}

export default EditName;
