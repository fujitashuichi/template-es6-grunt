// jasmine sample
describe('例1', function() {
	it('とりあえず-01', function() {
		expect($('.snow-field')[0]).toBeInDOM('.snow-field');
	});

	it('とりあえず-02', function() {
		expect($('<canvas class="snow-field"></canvas>')).toHaveClass('snow-field');
	});

	it('これはダメ', function() {
		expect($('.amoeba').width()).toBe(640);
		expect('hoge').toBe('hoge');
	});

	it('とりあえず-03 これも間違いだよ', function() {
		expect($('.button-test')).toHaveValue('1');
	});
});
