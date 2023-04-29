import React from 'react';

export interface Contact {
	name: string;
	link: string;
	icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}
