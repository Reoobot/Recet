import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MenusService } from './menu/menu.service';
// import { MenusController } from './menu/menu.controller';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
