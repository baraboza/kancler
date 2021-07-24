export default class Select {
	constructor(el) {
		this.parent = $(el);
		this.input = this.parent.find('.select__input');
		this.button = this.parent.find('.select__button');
		this.box = this.parent.find('.select__list');
		this.items = this.parent.find('.select__item');

		this.isOpen = false;
		this.isSelected = false;

		this.init();
	}

	init() {
		this.button.click(() => {
			this.isOpen = !this.isOpen;
			this.update();
		});

		$('body').click((e) => {
			if (
				!this.isOpen ||
				this.button.is(e.target) ||
				this.button.has(e.target).length ||
				this.box.is(e.target) ||
				this.box.has(e.target).length
			) return;

			this.isOpen = false;
			this.update();
		});

		this.items.click((e) => {
			const item = $(e.delegateTarget);

			this.input.val(item.data('value'));
			this.button.find('.select__button-text').html(
				item.html()
			);

			this.isSelected = true;
			this.isOpen = false;

			this.update();
		});
	}

	update() {
		if (this.isOpen) {
			this.parent.addClass('--opened');
			this.box.fadeIn(300);
		} else {
			this.parent.removeClass('--opened');
			this.box.fadeOut(300);
		}

		if (this.isSelected) {
			this.parent.addClass('--selected');
			this.parent.removeClass('--error');
		} else {
			this.parent.removeClass('--selected');
		}
	}
}