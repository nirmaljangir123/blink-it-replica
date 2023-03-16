import Button from 'react-bootstrap/Button';

function AddButton({add}) {
    return (
        <>
                <Button variant="outline-success" size="lg" className='w-100'>{add}</Button>
        </>
    );
}

export default AddButton;