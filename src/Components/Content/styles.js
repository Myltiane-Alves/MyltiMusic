import styled from 'styled-components';
import { pink, white} from '../../Theme';
import { motion} from 'framer-motion';

export const ContentRow = styled.div`
    display: flex;
`;

export const ContentCollumn = styled(motion.div)`
    display: flex;
`;


export const SmallCollumn = styled(ContentCollumn)`
    display: flex;
`;

export const BigCollumn = styled(ContentCollumn)`
    display: flex;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;

	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	> img {
		width: 300px;
		margin-left: -3px;
	}
`;