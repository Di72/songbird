import styled from 'styled-components';

export default styled.div`
	display: grid;
	grid-row-gap: 1em;
	grid-template-columns: 2.5fr 3.38fr 0.24fr 3.38fr 2.5fr;
	grid-template-rows: auto;
	grid-template-areas: ". header header header ." ". end end end ." ". navbar navbar navbar ." " . main main main . "
		" . list . prof ." " . next next next .";
	@media (max-width: 1400px) {
		grid-template-columns: 2fr 4.38fr 0.24fr 4.38fr 2fr;
		grid-template-areas: ". header header header ." ". end end end ." ". navbar navbar navbar ."
			" . main main main . " " . list . prof ." " . next next next .";
	}
	@media (max-width: 1070px) {
		grid-template-columns: 1fr 5.38fr 0.24fr 5.38fr 1fr;
		grid-template-areas: ". header header header ." ". end end end ." ". navbar navbar navbar ."
			" . main main main . " " . list . prof ." " . next next next .";
	}
	@media (max-width: 855px) {
		grid-template-columns: 0.5fr 5.5fr 5.5fr 0.5fr;
		grid-template-areas: ". header header ." ". end end ." ". navbar navbar ." " . main main . " " . list list ."
			" . prof prof ." " . next next .";
	}
`;
