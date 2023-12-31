import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModel, ProductSchema } from './product.model';
import { ProductService } from './product.service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: ProductModel.name,
				schema: ProductSchema,
				collection: 'Product',
			},
		]),
	],
	controllers: [ProductController],
	providers: [ProductService],
})
export class ProductModule {}
