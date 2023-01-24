import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuService } from './menu/menu.service';
import { MenuController } from './menu/menu.controller';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [MenuModule],
  controllers: [AppController, MenuController],
  providers: [AppService, MenuService],
})
export class AppModule {}
