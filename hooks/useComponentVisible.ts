import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
    initialIsVisible: boolean;
    keepOpenOnClickOutside?: boolean;
}

export const useComponentVisible = ({ initialIsVisible, keepOpenOnClickOutside = false }: Props) => {
    const [visible, setVisible] = useState<boolean>(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node) && !keepOpenOnClickOutside) {
                setVisible(false);
            }
        },
        [keepOpenOnClickOutside]
    );

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [handleClickOutside]);

    return { ref, visible, setVisible };
};
