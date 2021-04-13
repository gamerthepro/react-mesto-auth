import PopupWithForm from './PopupWithForm';

function ConfirmDeletePopup({isOpen, onClose, onCardDelete, idCard}) {

	const handleSubmit = e => {
		e.preventDefault();
		onCardDelete(idCard);
	}

	return (
		<PopupWithForm
			title="Вы уверены?"
			name={"delete_card"}
			textBtn="Да"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
		></PopupWithForm>
	)
}

export default ConfirmDeletePopup;