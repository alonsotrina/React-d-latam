import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    Button,
} from "../index"

const CartDialog = ({ isOpen, onClose, title, desc }) => {

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        Gracias por tu pedido
                    </DialogDescription>
                </DialogHeader>

                <p className='text-dark-700 py-3'>{desc}</p>

                <Button
                    variant="dark"
                    size="default"
                    onClick={onClose}
                >
                    Volver a comprar
                </Button>

            </DialogContent>
        </Dialog>
    )
}

export default CartDialog