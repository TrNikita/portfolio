import React from 'react';

export interface Skill {
	id: string;
	title: string;
	icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
	link?: string;
}
