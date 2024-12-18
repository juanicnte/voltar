import "../css/Contact.css"
import { useToast } from '@chakra-ui/react';

const CustomToast = ({ id, title, description, status = 'info', duration = 5000 }) => {
  const toast = useToast();

  // Mostrar el toast solo si no está activo
  if (!toast.isActive(id)) {
    toast({
      id,
      title,
      description,
      status,
      duration,
      isClosable: true,
    });
  }

  return null; // Este componente no necesita renderizar nada
};



export default CustomToast;