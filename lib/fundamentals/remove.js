"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = remove;
function remove(compare, node, value) {

	var left, right, rightest, delta;

	delta = compare(value, node.value);

	if (delta === 0) {

		left = node.left;
		right = node.right;

		if (left === null) {
			return right;
		} else if (right === null) {
			return left;
		} else {

			rightest = left;

			while (rightest.right !== null) {
				rightest = rightest.right;
			}

			rightest.right = right;

			return left;
		}
	} else if (delta < 0) {

		if (node.left !== null) {
			node.left = remove(compare, node.left, value);
		}

		return node;
	} else {

		if (node.right !== null) {
			node.right = remove(compare, node.right, value);
		}

		return node;
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5kYW1lbnRhbHMvcmVtb3ZlLmpzIl0sIm5hbWVzIjpbInJlbW92ZSIsImNvbXBhcmUiLCJub2RlIiwidmFsdWUiLCJsZWZ0IiwicmlnaHQiLCJyaWdodGVzdCIsImRlbHRhIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0JBLE07QUFBVCxTQUFTQSxNQUFULENBQWtCQyxPQUFsQixFQUEyQkMsSUFBM0IsRUFBaUNDLEtBQWpDLEVBQXlDOztBQUV2RCxLQUFJQyxJQUFKLEVBQVVDLEtBQVYsRUFBaUJDLFFBQWpCLEVBQTJCQyxLQUEzQjs7QUFFQUEsU0FBUU4sUUFBU0UsS0FBVCxFQUFnQkQsS0FBS0MsS0FBckIsQ0FBUjs7QUFFQSxLQUFLSSxVQUFVLENBQWYsRUFBbUI7O0FBRWxCSCxTQUFPRixLQUFLRSxJQUFaO0FBQ0FDLFVBQVFILEtBQUtHLEtBQWI7O0FBRUEsTUFBS0QsU0FBUyxJQUFkLEVBQXFCO0FBQ3BCLFVBQU9DLEtBQVA7QUFDQSxHQUZELE1BSUssSUFBS0EsVUFBVSxJQUFmLEVBQXNCO0FBQzFCLFVBQU9ELElBQVA7QUFDQSxHQUZJLE1BSUE7O0FBRUpFLGNBQVdGLElBQVg7O0FBRUEsVUFBUUUsU0FBU0QsS0FBVCxLQUFtQixJQUEzQixFQUFrQztBQUNqQ0MsZUFBV0EsU0FBU0QsS0FBcEI7QUFDQTs7QUFFREMsWUFBU0QsS0FBVCxHQUFpQkEsS0FBakI7O0FBRUEsVUFBT0QsSUFBUDtBQUVBO0FBRUQsRUEzQkQsTUE2QkssSUFBS0csUUFBUSxDQUFiLEVBQWlCOztBQUVyQixNQUFLTCxLQUFLRSxJQUFMLEtBQWMsSUFBbkIsRUFBMEI7QUFDekJGLFFBQUtFLElBQUwsR0FBWUosT0FBUUMsT0FBUixFQUFpQkMsS0FBS0UsSUFBdEIsRUFBNEJELEtBQTVCLENBQVo7QUFDQTs7QUFFRCxTQUFPRCxJQUFQO0FBRUEsRUFSSSxNQVVBOztBQUVKLE1BQUtBLEtBQUtHLEtBQUwsS0FBZSxJQUFwQixFQUEyQjtBQUMxQkgsUUFBS0csS0FBTCxHQUFhTCxPQUFRQyxPQUFSLEVBQWlCQyxLQUFLRyxLQUF0QixFQUE2QkYsS0FBN0IsQ0FBYjtBQUNBOztBQUVELFNBQU9ELElBQVA7QUFFQTtBQUVEIiwiZmlsZSI6InJlbW92ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmUgKCBjb21wYXJlLCBub2RlLCB2YWx1ZSApIHtcblxuXHR2YXIgbGVmdCwgcmlnaHQsIHJpZ2h0ZXN0LCBkZWx0YTtcblxuXHRkZWx0YSA9IGNvbXBhcmUoIHZhbHVlLCBub2RlLnZhbHVlICk7XG5cblx0aWYgKCBkZWx0YSA9PT0gMCApIHtcblxuXHRcdGxlZnQgPSBub2RlLmxlZnQ7XG5cdFx0cmlnaHQgPSBub2RlLnJpZ2h0O1xuXG5cdFx0aWYgKCBsZWZ0ID09PSBudWxsICkge1xuXHRcdFx0cmV0dXJuIHJpZ2h0O1xuXHRcdH1cblxuXHRcdGVsc2UgaWYgKCByaWdodCA9PT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBsZWZ0O1xuXHRcdH1cblxuXHRcdGVsc2Uge1xuXG5cdFx0XHRyaWdodGVzdCA9IGxlZnQ7XG5cblx0XHRcdHdoaWxlICggcmlnaHRlc3QucmlnaHQgIT09IG51bGwgKSB7XG5cdFx0XHRcdHJpZ2h0ZXN0ID0gcmlnaHRlc3QucmlnaHQ7XG5cdFx0XHR9XG5cblx0XHRcdHJpZ2h0ZXN0LnJpZ2h0ID0gcmlnaHQ7XG5cblx0XHRcdHJldHVybiBsZWZ0O1xuXG5cdFx0fVxuXG5cdH1cblxuXHRlbHNlIGlmICggZGVsdGEgPCAwICkge1xuXG5cdFx0aWYgKCBub2RlLmxlZnQgIT09IG51bGwgKSB7XG5cdFx0XHRub2RlLmxlZnQgPSByZW1vdmUoIGNvbXBhcmUsIG5vZGUubGVmdCwgdmFsdWUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbm9kZTtcblxuXHR9XG5cblx0ZWxzZSB7XG5cblx0XHRpZiAoIG5vZGUucmlnaHQgIT09IG51bGwgKSB7XG5cdFx0XHRub2RlLnJpZ2h0ID0gcmVtb3ZlKCBjb21wYXJlLCBub2RlLnJpZ2h0LCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBub2RlO1xuXG5cdH1cblxufVxuXG4iXX0=