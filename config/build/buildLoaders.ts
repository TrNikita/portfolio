import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const { isDev } = options;

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const cssLoader = buildCssLoader(isDev);

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader =
		{
			test: /\.(png|jpe?g|gif|woff2|otf|ttf|woff)$/i,
			use: [
				{
					loader: 'file-loader',
				},
			],
		};

	return [
		fileLoader,
		svgLoader,
		typescriptLoader,
		cssLoader,
	];
}
