import { ComponentType, Suspense, SuspenseProps } from 'react';

export default function withSuspense<P extends string | number | object | any>(WrappedComponent: ComponentType<any>,
    fallback: SuspenseProps["fallback"] = null) {

    function ComponentWithSuspense(props: P) {
        return (
            <Suspense fallback={fallback}>
                <WrappedComponent {...props} />
            </Suspense>
        );
    }

    return ComponentWithSuspense;
}
