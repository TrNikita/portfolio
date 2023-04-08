import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
// import { getUIScrollByPath, uiActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

interface PageProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
	const { className, children, onScrollEnd } = props;
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const scrollPosition = useSelector(
		(state: StateSchema) => getUIScrollByPath(state, pathname),
	);

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd,
	});

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	});

	const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		console.log('SCROLL');
		dispatch(uiActions.setScrollPosition({
			position: e.currentTarget.scrollTop,
			path: pathname,
		}));
	}, 500);

	return (
		<main
			ref={wrapperRef}
			className={classNames(cls.Page, {}, [className])}
			onScroll={onScroll}
			id={PAGE_ID}
		>
			{children}
			{onScrollEnd
				? <div className={cls.trigger} ref={triggerRef}/>
				: null}
		</main>
	);
});
